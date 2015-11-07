#Cloze(完形填空)

##实际样题

Over half the world’s people now live in cities. The latest “Global Report on Human Settlements” says a significant change took place last year. The report ( 1 ) this week from U.N. Habitat, a United Nations agency.
　　A century ago, ( 2 ) than five percent of all people lived in cities. ( 3 ) the middle of this century it could be seventy percent, or ( 4 ) six and a half billion people.
　　Already three-fourths of people in ( 5 ) countries live in cities. Now most urban population ( 6 ) is in the developing world.
　　Urbanization can ( 7 ) to social and economic progress, but also put ( 8 ) on cities to provide housing and ( 9 ) . The new report says almost two hundred thousand people move ( 10 ) cities and towns each day. It says worsening inequalities, ( 11 ) by social divisions and differences in ( 12 ) , could result in violence and crime ( 13 ) cities plan better.
　　Another issue is urban sprawl (无序扩展的城区). This is where cities ( 14 ) quickly into rural areas, sometimes ( 15 ) a much faster rate than urban population growth.
　　Sprawl is ( 16 ) in the United States. Americans move a lot. In a recent study, Art Hall at the University of Kansas found that people are moving away from the ( 17 ) cities to smaller ones. He sees a ( 18 ) toward “de-urbanization” across the nation.
　　( 19 ) urban economies still provide many ( 20 ) that rural areas do not.

<table>
	<tr>
		<td>1.</td>
		<td>A. came on</td>
		<td>B. came off</td>
		<td>C. came over</td>
		<td>D. came out</td>
	</tr>
</table>

##JSON结构

	{
		"id": "试题item存储在数据库中的编号",						
		"type": "试题item的类型",			
		"level": "试题的难度等级",						
		"duration": "试题所需时长",					
		"flowable": "试题是否为流程性试题，true为是，false为否",				
		"recommendation-point": "建议每小题的指定分数",		
		"stem": "试题题干",
		"item-options": [ 		//item选项数组，数组中的内容为item各选项
			"item选项1",			
			"item选项2"
		],
		"questions": [			//试题item所包含的所有问题数组，数组中的每个元素为一个question，每个question为一个对象
			{
				"type": "question的类型",
				"shuffle": true, //只有当type为多选或者单选时，该选项才有效			
				"stem": "question题干",			
				"options": [		//question的各个选项
					"option1",
					"option2",
					"option3",
					"option4"
				],
				"strict": true,	//正确答案是否要与参考答案完全匹配
				"reference-answer": "question的参考答案",		
				"answer-analysis": "参考答案解析"
			}
		]
	}
