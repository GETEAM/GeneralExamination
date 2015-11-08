#Sentence Error Correction (句子改错)

##实际样题

It took Jack two hours climb the mountain . _______  

##JSON结构

	{
		"id": 1,						
		"type": "Sentence Error Correction",			
		"level": 2,						
		"duration": 1,					
		"flowable": false,				
		"recommendation-point": 1,		
		"stem": "It took Jack two hours climb the mountain . _______  ",
		"questions": [
			{
				"type": "BlankFilling",	
				"strict": true,	
				"reference-answer": "climb to to climb",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
