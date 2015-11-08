#Inappropriate Collocation (搭配不当)

##实际样题

A. He speaks American English well enough to pss by an American.

B. He walked on the street the orther day and happened to pass by an American.

C. He walked out to the front door quickly and was passed for the thief.

D. For almost three years,emails have been passing between the American and him.

##JSON结构

	{
		"id": 1,						
		"type": "Inappropriate Collocation",			
		"level": 1,						
		"duration": 1,					
		"flowable": false,				
		"recommendation-point": 1,		
		"stem": "试题题干",
		"questions": [	
			{
				"type": "SingleChoice",
				"shuffle": true, 			
				options: [		
					"He speaks American English well enough to pss by an American.",
					"He walked on the street the orther day and happened to pass by an American.",
					"He walked out to the front door quickly and was passed for the thief.",
					"For almost three years,emails have been passing between the American and him."
				],
				"strict": true,	
				"reference-answer": "1",		
				"answer-analysis": "参考答案解析"
			}
		]
	}