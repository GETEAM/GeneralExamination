#SingleBlankFilling(单个填空题)

##实际样题

January1st, 1937, is the historic date when Britain ________(join)the Common Market. 

##JSON结构

	{
		"id": 1,						
		"type": "SingleBlankFilling",			
		"level": 2",						
		"duration": 1,					
		"flowable": false,				
		"recommendation-point": 1,		
		"stem": "January1st, 1937, is the historic date when Britain ________(join)the Common Market.",
		"questions": [
			{
				"type": "BlankedFilling",
				"pause": 10,
				"strict": true,	
				"reference-answer": "joined",		
				"answer-analysis": "过去式"
			}
		]
	}
