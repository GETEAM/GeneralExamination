#ListeningConversationAnswering(听对话问答问题)

##实际样题

A audio

##JSON结构

	{
		"id": 1,						
		"stem": "<audio src="abc.mp3">",
		"preShow":false,		
		"questions": [
			{
				"type": "Record",
				"pause": 10,			
				"stem": "<audio src="abc.mp3">",
				"strict": false,
				"reference-answer": "参考答案",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
