#!/usr/bin/env python3
"""
Fetch YouTube video transcript and metadata.
Usage: python youtube_transcript.py <video_url_or_id>
"""

import sys
import re
from youtube_transcript_api import YouTubeTranscriptApi

def extract_video_id(url_or_id):
    """Extract video ID from URL or return as-is if already an ID."""
    patterns = [
        r'(?:v=|/v/|youtu\.be/)([a-zA-Z0-9_-]{11})',
        r'^([a-zA-Z0-9_-]{11})$'
    ]
    for pattern in patterns:
        match = re.search(pattern, url_or_id)
        if match:
            return match.group(1)
    return None

def get_transcript(video_id):
    """Fetch transcript for a YouTube video."""
    api = YouTubeTranscriptApi()
    try:
        # Try with English first
        transcript = api.fetch(video_id, languages=['en', 'en-US', 'en-GB'])
        return list(transcript)
    except Exception as e:
        # Try without language preference
        try:
            transcript = api.fetch(video_id)
            return list(transcript)
        except Exception as e2:
            print(f"Error: {e2}", file=sys.stderr)
            return None

def format_transcript(transcript_data):
    """Format transcript data into readable text."""
    return '\n'.join([entry.text for entry in transcript_data])

def format_transcript_with_timestamps(transcript_data):
    """Format transcript with timestamps."""
    lines = []
    for entry in transcript_data:
        minutes = int(entry.start // 60)
        seconds = int(entry.start % 60)
        lines.append(f"[{minutes:02d}:{seconds:02d}] {entry.text}")
    return '\n'.join(lines)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python youtube_transcript.py <video_url_or_id> [--timestamps]")
        sys.exit(1)

    video_input = sys.argv[1]
    with_timestamps = '--timestamps' in sys.argv

    video_id = extract_video_id(video_input)
    if not video_id:
        print(f"Error: Could not extract video ID from '{video_input}'", file=sys.stderr)
        sys.exit(1)

    print(f"Video ID: {video_id}", file=sys.stderr)

    transcript_data = get_transcript(video_id)

    if transcript_data:
        if with_timestamps:
            print(format_transcript_with_timestamps(transcript_data))
        else:
            print(format_transcript(transcript_data))
    else:
        sys.exit(1)
