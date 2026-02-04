# Transcript Module

Fetch transcripts from YouTube videos.

---

## When to Use

- User provides a YouTube URL
- User asks for "transcript" or "captions"
- Need text content before insight extraction

---

## Script Usage

**Basic (plain text):**
```bash
python .claude/skills/youtube/scripts/youtube_transcript.py <url>
```

**With timestamps:**
```bash
python .claude/skills/youtube/scripts/youtube_transcript.py <url> --timestamps
```

**Examples:**
```bash
# Full URL
python .claude/skills/youtube/scripts/youtube_transcript.py "https://www.youtube.com/watch?v=JlbzZiBADlw"

# Short URL
python .claude/skills/youtube/scripts/youtube_transcript.py "https://youtu.be/JlbzZiBADlw"

# Just video ID
python .claude/skills/youtube/scripts/youtube_transcript.py JlbzZiBADlw
```

---

## Output Formats

**Plain text (default):**
```
Welcome to this video about AI automation...
Today we'll cover three main topics...
```

**With timestamps:**
```
[00:00] Welcome to this video about AI automation...
[00:15] Today we'll cover three main topics...
[01:30] First, let's talk about workflows...
```

---

## Language Handling

The script tries languages in order:
1. English (en, en-US, en-GB)
2. Any available language (fallback)

Most videos have auto-generated captions even if manual ones aren't available.

---

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| "Could not extract video ID" | Invalid URL format | Check URL is valid YouTube link |
| "No transcript available" | Video has no captions | Ask user to paste transcript manually |
| "Video unavailable" | Private/deleted video | Cannot fetch - need alternative source |

**When script fails:**
Ask the user:
> "I couldn't fetch the transcript automatically. Could you paste the transcript or provide a different video URL?"

---

## Next Steps

After fetching transcript:
1. Proceed to [INSIGHTS.md](INSIGHTS.md) for extraction
2. Or return raw transcript to user if that's all they need
