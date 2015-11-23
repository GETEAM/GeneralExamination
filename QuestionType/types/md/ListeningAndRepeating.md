#ListeningAndRepeating(会话跟读)

##实际样题

(An audio)

##JSON结构

	{
		"id": 1,
		"stem": "An audio <audio src="abc.mp3">",
		"preShow":true,
		"questions": [
			{
				"type": "Record",
				"pause": 30,
				"stem": "录音提示音<audio src="abc.mp3">",
				"strict": false,
				"reference-answer": "参考答案",
				"answer-analysis": "答案解析"
			}
		]
	}