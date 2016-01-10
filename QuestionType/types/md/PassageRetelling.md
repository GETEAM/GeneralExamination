#PassageRetelling(短文复述)

##实际样题

Listen to the story twice and then retell it.  You'll have one minute to prepare and another minute to retell the story you've just heard
(A audio)

##JSON结构

	{
		"id": 1,								
		"stem": "Listen to the story twice and then retell it.  You'll have one minute to prepare 
		and another minute to retell the story you've just heard <audio src="abc.mp3">",
		"pre-show": true,
		"questions": [
			{
				"type": "Record",
				"pause": 150,	
				"stem": "录音提示音<audio src="abc.mp3">",		
				"strict": false,
				"reference-answer": "question的参考答案",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
