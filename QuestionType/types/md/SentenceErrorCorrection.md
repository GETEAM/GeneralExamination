#SentenceErrorCorrection(句子改错)

##实际样题

It took Jack two hours climb the mountain. _______  

##JSON结构

	{
		"stem": "It took Jack two hours climb the mountain. _______  ",
		"show-stem-length": false,
		"flowable": false,
		"questions-num-limit": true,
		"pre-show": true,
		"questions": [
			{
				"type": "Correction",	
				"strict": true,	
				"reference-answer": ["climb", "climb"],		
				"answer-analysis": "参考答案解析"
			}
		]
	}
