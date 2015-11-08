#PassageErrorCorrection(短文改错)

##实际样题

Until the very latest moment of his existence, man
has been bound to the planet on which he originated and 
developed. Now (he had the capability to leave that planet)( 1 )
and move out into the universe to those worlds which (he
has known previously only directly)( 2 ). Men have explored
parts of the moon, put spaceships in orbit around another
planet and possibly within the decade (will land into another)( 3 ) 
planet and explore it. Can we( be too bold as to)( 4 ) 
suggest that we may (be able to colonize other planet)( 5 ) 
within the not - too - distant future ? Some have advocated
such a procedure as a solution to the population
problem: ship the excess people off to the moon. But
we (must keep in head the billions of dollars)( 6 ) we might 
spend in carrying out the project. To maintain the
earth's population at its present level. we would have
to blast off into space 7,500 people every hour of　every day of the year.
Why are we (spending so little money on space )( 7 )
exploration ? (Consider the great need for improving)( 8 ) 
many aspects of the global environment, one is surely
justified in his concern for the money and resources
that (they are poured into the space exploration efforts)( 9 ). 
But perhaps we should look at both sides of the
coin (before arriving hasty conclusions)( 10 ). 

##JSON结构

	{
		"id": 1,						
		"type": "PassageErrorCorrection",			
		"level": 4,						
		"duration": 10,					
		"flowable": false,				
		"recommendation-point": 1,		
		"stem": "<p data-anchor-id="34l1">Until the very latest moment of his existence, man <br>has been bound to the planet on which he originated and  <br>developed. Now (he had the capability to leave that planet)( 1 ) <br>and move out into the universe to those worlds which (he <br>has known previously only directly)( 2 ). Men have explored <br>parts of the moon, put spaceships in orbit around another <br>planet and possibly within the decade (will land into another)( 3 )  <br>planet and explore it. Can we( be too bold as to)( 4 )  <br>suggest that we may (be able to colonize other planet)( 5 )  <br>within the not - too - distant future ? Some have advocated <br>such a procedure as a solution to the population <br>problem: ship the excess people off to the moon. But <br>we (must keep in head the billions of dollars)( 6 ) we might  <br>spend in carrying out the project. To maintain the <br>earth's population at its present level. we would have <br>to blast off into space 7,500 people every hour of　every day of the year. <br>Why are we (spending so little money on space )( 7 ) <br>exploration ? (Consider the great need for improving)( 8 )  <br>many aspects of the global environment, one is surely <br>justified in his concern for the money and resources <br>that (they are poured into the space exploration efforts)( 9 ).  <br>But perhaps we should look at both sides of the <br>coin (before arriving hasty conclusions)( 10 ). </p>",
		"questions": [			
			{
				"type": "BlankFilling",						
				"reference-answer": "had to has",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "directly to indirectly",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "into to on",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "too to so",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "plant to planets",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "head to mind",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "little to much",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "Consider to Considering",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "they to ",
				"strict": true,		
				"answer-analysis": "略"
			},
			{
				"type": "BlankFilling",						
				"reference-answer": "arriving hasty to at",
				"strict": true,		
				"answer-analysis": "略"
			}
		]
	}
