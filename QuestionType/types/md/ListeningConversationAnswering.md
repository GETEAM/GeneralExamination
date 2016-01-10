#ListeningConversationAnswering(听对话问答问题)

##实际样题

A audio

##JSON结构

	{
		"stem": "<audio src='abc.mp3'>",
		"show-stem-length": false,
		"flowable": true,
		"questions-num-limit": true,
		"pre-show":false,		
		"questions": [
			{
				"type": "Record",
				"stem": "<audio src="abc.mp3">",
				"pause": 10,			
				"strict": false,
				"reference-answer": "参考答案",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
