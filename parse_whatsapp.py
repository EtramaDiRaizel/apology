#!/usr/bin/env python3
"""
WhatsApp Chat Parser
Parses WhatsApp export files and extracts statistics about messages,
keywords, and longest messages.
"""

import json
import re
from datetime import datetime
from collections import defaultdict
from typing import Dict, List, Tuple, Any


class WhatsAppParser:
    """Parses WhatsApp export files and extracts statistics."""
    
    # Keywords to track with exact variations in a single regex each
    KEYWORDS = {
        'iloveyou': r"\b(?:i\s*love\s*you|iloveyou)\b(?!\s*(?:more|too))",
        'iloveyoumore': r"\b(?:i\s*love\s*you\s*more|iloveyoumore)\b",
        'iloveyoutoo': r"\b(?:i\s*love\s*you\s*too|iloveyoutoo)\b",
        'goodnight': r"\b(?:good\s*night|goodnight|gn)\b",
        'baby': r"\bbaby\b",
        'sayang': r"\b(?:sayanggg|sayangg|sayang)\b"
    }
    
    def __init__(self, filepath: str):
        """Initialize the parser with a file path."""
        self.filepath = filepath
        self.messages: List[Dict[str, Any]] = []
        self.me_name = "ikram"
        self.friend_name = "twincess 🫶🏼"
        
    def parse_file(self) -> List[Dict[str, Any]]:
        """Parse the WhatsApp export file and extract all messages."""
        try:
            with open(self.filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except FileNotFoundError:
            print(f"Error: File '{self.filepath}' not found.")
            return []
        
        # Regex patterns for different timestamp formats
        # Pattern 1: [DD/MM/YYYY, HH:MM:SS] Name: Message
        pattern1 = r'\[(\d{1,2}/\d{1,2}/\d{4}), (\d{1,2}:\d{2}:\d{2})\]\s+([^:]+):\s*(.+?)(?=\[\d{1,2}/\d{1,2}/\d{4}|$)'
        
        matches = re.finditer(pattern1, content, re.DOTALL)
        
        for match in matches:
            date_str = match.group(1)
            time_str = match.group(2)
            sender = match.group(3).strip()
            message_text = match.group(4).strip()
            
            # Skip system messages (messages without a recognized sender)
            if sender not in [self.me_name, self.friend_name]:
                continue
            
            # Parse timestamp
            try:
                timestamp = datetime.strptime(f"{date_str} {time_str}", "%d/%m/%Y %H:%M:%S")
            except ValueError:
                continue
            
            # Clean message text
            message_text = self._clean_message(message_text)
            
            self.messages.append({
                'timestamp': timestamp,
                'date': date_str,
                'sender': sender,
                'message': message_text
            })
        
        return self.messages
    
    def _clean_message(self, text: str) -> str:
        """Clean message text by removing special markers and extra whitespace."""
        # Remove zero-width spaces and other invisible characters
        text = text.replace('‎', '')
        
        # Remove "sticker omitted", "document omitted", etc.
        text = re.sub(r'‎?sticker omitted', '', text, flags=re.IGNORECASE)
        text = re.sub(r'‎?document omitted', '', text, flags=re.IGNORECASE)
        text = re.sub(r'‎?image omitted', '', text, flags=re.IGNORECASE)
        text = re.sub(r'‎?video omitted', '', text, flags=re.IGNORECASE)
        text = re.sub(r'‎?audio omitted', '', text, flags=re.IGNORECASE)
        
        # Remove edited/deleted markers
        text = re.sub(r'<This message was edited>', '', text, flags=re.IGNORECASE)
        text = re.sub(r'<This message was deleted>', '', text, flags=re.IGNORECASE)
        
        # Clean up whitespace
        text = ' '.join(text.split())
        
        return text
    
    def get_message_counts(self) -> Dict[str, int]:
        """Get total message count for each participant."""
        counts = defaultdict(int)
        for msg in self.messages:
            counts[msg['sender']] += 1
        return dict(counts)
    
    def count_keyword_in_message(self, message: str, keyword_pattern: str) -> int:
        """
        Count occurrences of a keyword pattern in a message.
        """
        return len(re.findall(keyword_pattern, message, flags=re.IGNORECASE))
    
    def get_keyword_stats(self) -> Dict[str, Any]:
        """Extract keyword statistics with improved variation handling."""
        keyword_stats = {}
        keyword_dates = defaultdict(lambda: defaultdict(list))
        
        # Initialize stats for each keyword
        for keyword in self.KEYWORDS.keys():
            keyword_stats[keyword] = {
                self.me_name: 0,
                self.friend_name: 0,
                'total': 0
            }
        
        # Process each message
        for msg in self.messages:
            sender = msg['sender']
            date = msg['date']
            
            for keyword, pattern in self.KEYWORDS.items():
                # Count occurrences using one precise pattern per keyword
                count = self.count_keyword_in_message(msg['message'], pattern)
                
                if count > 0:
                    keyword_stats[keyword][sender] += count
                    keyword_stats[keyword]['total'] += count
                    
                    # Track dates for each keyword
                    keyword_dates[keyword][sender].append({
                        'date': date,
                        'count': count,
                        'message_preview': msg['message'][:100]
                    })
        
        # Build result with detailed dates
        result = {}
        for keyword, stats in keyword_stats.items():
            result[keyword] = {
                'counts': stats,
                'breakdown': {
                    self.me_name: stats[self.me_name],
                    self.friend_name: stats[self.friend_name],
                    'who_said_more': self.me_name if stats[self.me_name] > stats[self.friend_name] 
                                    else (self.friend_name if stats[self.friend_name] > stats[self.me_name] else 'equal')
                },
                'dates': {
                    self.me_name: keyword_dates[keyword][self.me_name],
                    self.friend_name: keyword_dates[keyword][self.friend_name]
                }
            }
        
        return result
    
    def get_longest_messages(self, sender: str, top_n: int = 3) -> List[Dict[str, Any]]:
        """Get the longest continuous messages from a specific sender."""
        sender_messages = [
            {
                'timestamp': msg['timestamp'],
                'date': msg['date'],
                'message': msg['message'],
                'length': len(msg['message'])
            }
            for msg in self.messages 
            if msg['sender'] == sender and self._clean_message(msg['message'])
        ]
        
        # Sort by message length (descending)
        sender_messages.sort(key=lambda x: x['length'], reverse=True)
        
        return sender_messages[:top_n]
    
    def generate_report(self) -> Dict[str, Any]:
        """Generate a comprehensive report of all statistics."""
        report = {
            'metadata': {
                'file': self.filepath,
                'parsed_at': datetime.now().isoformat(),
                'total_messages': len(self.messages),
                'participants': [self.me_name, self.friend_name]
            },
            'message_counts': self.get_message_counts(),
            'keyword_statistics': self.get_keyword_stats(),
            'longest_messages_by_me': {
                'sender': self.me_name,
                'count': 3,
                'messages': self.get_longest_messages(self.me_name, top_n=3)
            }
        }
        
        return report


def main():
    """Main execution function."""
    # Configuration
    chat_file = r"c:\Users\ikram\Downloads\WhatsApp Chat - twincess 🫶🏼\_chat.txt"
    output_file = r"c:\Users\ikram\Downloads\wrapped_data.json"
    
    print("🔍 Starting WhatsApp Chat Parser...")
    print(f"📂 Reading file: {chat_file}")
    
    # Parse the file
    parser = WhatsAppParser(chat_file)
    messages = parser.parse_file()
    
    if not messages:
        print("❌ No messages found. Please check the file format.")
        return
    
    print(f"✅ Successfully parsed {len(messages)} messages")
    
    # Generate report
    report = parser.generate_report()
    
    # Display summary
    print("\n" + "="*60)
    print("📊 CHAT STATISTICS SUMMARY")
    print("="*60)
    
    print(f"\n📈 Total Messages: {report['metadata']['total_messages']}")
    print("\n👥 Message Counts per Participant:")
    for participant, count in report['message_counts'].items():
        print(f"   {participant}: {count}")
    
    print("\n🔑 Keyword Statistics:")
    for keyword, stats in report['keyword_statistics'].items():
        total = stats['counts']['total']
        if total > 0:
            print(f"\n   {keyword.upper()}:")
            print(f"      Total mentions: {total}")
            print(f"      {parser.me_name}: {stats['breakdown'][parser.me_name]}")
            print(f"      {parser.friend_name}: {stats['breakdown'][parser.friend_name]}")
            print(f"      Who said more: {stats['breakdown']['who_said_more']}")
    
    print("\n📝 Top 3 Longest Messages from Me:")
    for i, msg in enumerate(report['longest_messages_by_me']['messages'], 1):
        print(f"\n   #{i} ({msg['length']} characters) - {msg['date']}")
        preview = msg['message'][:80] + "..." if len(msg['message']) > 80 else msg['message']
        print(f"      {preview}")
    
    print("\n" + "="*60)
    
    # Save to JSON
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False, default=str)
        print(f"\n✅ Report successfully saved to: {output_file}")
    except IOError as e:
        print(f"❌ Error saving file: {e}")
        return
    
    print("\n🎉 Done!")


if __name__ == "__main__":
    main()
