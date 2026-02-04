---
name: youtube
description: Extract transcripts and insights from YouTube videos. Use when user shares a YouTube URL, asks to "process this video", "get transcript", "extract from YouTube", or mentions youtube.com or youtu.be links.
---

# YouTube

Extract transcripts and insights from YouTube videos, then save to the knowledge base.

## Quick Start

```
User: "Process this video: https://youtube.com/watch?v=..."
→ Fetches transcript
→ Categorizes video type
→ Extracts key insights
→ Saves to context/learning/
```

## Available Operations

| Operation | Description | Module |
|-----------|-------------|--------|
| Fetch Transcript | Get text from any YouTube video | [TRANSCRIPT.md](modules/TRANSCRIPT.md) |
| Extract Insights | Analyze and summarize key points | [INSIGHTS.md](modules/INSIGHTS.md) |

## Scripts

Fetch transcript:
```bash
python .claude/skills/youtube/scripts/youtube_transcript.py <url>
```

With timestamps:
```bash
python .claude/skills/youtube/scripts/youtube_transcript.py <url> --timestamps
```

## Workflow

1. **Get Transcript** - Run script or receive pasted content
2. **Categorize** - Identify video type (Tutorial, Interview, Course, Analysis, Case Study)
3. **Extract** - Pull insights based on type
4. **Connect** - Link to existing knowledge
5. **Save** - Store in `context/learning/{topic}/`

## Output Location

All insights saved to: `context/learning/{topic}/{video-title}.md`

## Requirements

- Python package: `youtube-transcript-api`
- Install: `pip install youtube-transcript-api`
