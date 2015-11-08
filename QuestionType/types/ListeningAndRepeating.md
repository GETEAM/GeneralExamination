#ListeningAndRepeating(会话跟读)

##实际样题

(An audio)

##JSON结构

	{
		"id": 1,
		"type": "ListeningAndRepeating",
		"level": 3,
		"duration": 10,
		"flowable": ture,
		"recommendation-point": 2,
		"stem": "An audio",
		"src": {
			"audio": "会话音频地址"
		},
		"questions": [
			{
				"type": "Record",
				"strict": false,
				"reference-answer": "参考答案",
				"reference-answer": "答案解析"
			}
		]
	}