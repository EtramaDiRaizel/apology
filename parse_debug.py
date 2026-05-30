#!/usr/bin/env python3
"""
WhatsApp Chat Debug Parser - Shows matching messages for verification
"""

import json
import re
from datetime import datetime
from collections import defaultdict
from typing import Dict, List, Tuple, Any


def parse_file_for_keywords(filepath: str) -> Dict[str, Any]:
    """Parse file and return detailed keyword matches."""
    
    me_name = "ikram"
    friend_name = "twincess 🫶🏼"
    
    # Keywords with variations
    KEYWORDS = {
        'iloveyou': [
            r"\bi\s*love\s*you\b(?!\s*more|\s*too)",
            r"\biloveyou\b(?!more|too)"
        ],
        'iloveyoumore': [
            r"\bi\s*love\s*you\s*more\b",
            r"\biloveyoumore\b"
        ],
        'iloveyoutoo': [
            r"\bi\s*love\s*you\s*too\b",
            r"\biloveyoutoo\b"
        ],
        'goodnight': [
            r"\bgood\s*night\b",
            r"\bgoodnight\b",
            r"\bgn\b"
        ],
        'baby': [
            r"\bbaby\b"
        ],
        'sayang': [
            r"\bsayang\b",
            r"\bsayanggg\b",
            r"\bsayangg\b"
        ]
    }
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File '{filepath}' not found.")
        return {}
    
    pattern = r'\[(\d{1,2}/\d{1,2}/\d{4}), (\d{1,2}:\d{2}:\d{2})\]\s+([^:]+):\s*(.+?)(?=\[\d{1,2}/\d{1,2}/\d{4}|$)'
    matches = re.finditer(pattern, content, re.DOTALL)
    
    messages = []
    for match in matches:
        date_str = match.group(1)
        time_str = match.group(2)
        sender = match.group(3).strip()
        message_text = match.group(4).strip()
        
        if sender not in [me_name, friend_name]:
            continue
        
        try:
            timestamp = datetime.strptime(f"{date_str} {time_str}", "%d/%m/%Y %H:%M:%S")
        except ValueError:
            continue
        
        # Clean message
        message_text = message_text.replace('‎', '')
        message_text = re.sub(r'‎?sticker omitted', '', message_text, flags=re.IGNORECASE)
        message_text = re.sub(r'‎?document omitted', '', message_text, flags=re.IGNORECASE)
        message_text = re.sub(r'<This message was edited>', '', message_text, flags=re.IGNORECASE)
        message_text = ' '.join(message_text.split())
        
        messages.append({
            'timestamp': timestamp,
            'date': date_str,
            'sender': sender,
            'message': message_text
        })
    
    # Debug: Show matches for each keyword
    print("\n" + "="*80)
    print("KEYWORD MATCHING DEBUG")
    print("="*80)
    
    results = {}
    for keyword, patterns in KEYWORDS.items():
        print(f"\n\n{'='*80}")
        print(f"KEYWORD: {keyword.upper()}")
        print(f"{'='*80}")
        
        ikram_count = 0
        twincess_count = 0
        ikram_matches = []
        twincess_matches = []
        
        for msg in messages:
            message_lower = msg['message'].lower()
            total_count = 0
            
            for pattern in patterns:
                matches_found = re.findall(pattern, message_lower, flags=re.IGNORECASE)
                if matches_found:
                    total_count += len(matches_found)
            
            if total_count > 0:
                if msg['sender'] == me_name:
                    ikram_count += total_count
                    ikram_matches.append({
                        'date': msg['date'],
                        'count': total_count,
                        'message': msg['message'][:100]
                    })
                else:
                    twincess_count += total_count
                    twincess_matches.append({
                        'date': msg['date'],
                        'count': total_count,
                        'message': msg['message'][:100]
                    })
        
        total = ikram_count + twincess_count
        print(f"\nTOTAL: {total}")
        print(f"  ikram: {ikram_count}")
        print(f"  twincess: {twincess_count}")
        
        print(f"\n📍 Sample matches from ikram ({len(ikram_matches)} occurrences):")
        for i, m in enumerate(ikram_matches[:3]):
            print(f"   [{i+1}] {m['date']} (x{m['count']}): {m['message']}")
        
        print(f"\n📍 Sample matches from twincess ({len(twincess_matches)} occurrences):")
        for i, m in enumerate(twincess_matches[:3]):
            print(f"   [{i+1}] {m['date']} (x{m['count']}): {m['message']}")
        
        results[keyword] = {
            'total': total,
            'ikram': ikram_count,
            'twincess': twincess_count,
            'ikram_sample': ikram_matches[:3],
            'twincess_sample': twincess_matches[:3]
        }
    
    print("\n" + "="*80)
    print("SUMMARY")
    print("="*80)
    for keyword, data in results.items():
        print(f"{keyword}: {data['total']} total (ikram: {data['ikram']}, twincess: {data['twincess']})")
    
    return results


if __name__ == "__main__":
    chat_file = r"c:\Users\ikram\Downloads\WhatsApp Chat - twincess 🫶🏼\_chat.txt"
    parse_file_for_keywords(chat_file)
