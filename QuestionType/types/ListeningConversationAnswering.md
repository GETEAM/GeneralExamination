#ListeningConversationAnswering(听对话问答问题)

##实际样题

A audio

##JSON结构

	{
		"id": 1,						
		"type": "ListeningConversationAnswering",			
		"level": 2,						
		"duration": 1,					
		"flowable": true,				
		"recommendation-point": 2,		
		"src": {
			"audio": "音频地址"
		},
		"questions": [
			{
				"type": Record,
				"pause": 10,			
				"src": { 		
					"audio": "音频地址"
				},		
				"strict": false,
				"reference-answer": "参考答案",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
