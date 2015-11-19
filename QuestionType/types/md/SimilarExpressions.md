#SimilarExpressions(近义词替换)

##实际样题

All of you friends will **support** you.

A. stand up for

B. be against

C. care for

D. stand around

##JSON结构

	{
		"id": 1,								
		"stem": "All of you friends will support you.",
		"preShow": true,
		"questions": [
			{
				"type": "SingleChoice",
				"shuffle": true,
				"options": [   
					"stand up for",
					"be against",
					"care for",
					"stand around"
				]
				"strict": true,
				"reference-answer": 1,
				"answer-analysis": "参考答案解析"
			}
		]
	}