#试题类型英文名(中文名)

##实际样题

(试题item的实际信息，包括题干，各小题)

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
				"pause": "当有需要时，如听力播放完成后的暂停时间"， //此处单位为秒
				"shuffle": true, //只有当type为多选或者单选时，该选项才有效			
				"stem": "question题干",			
				options: [		//question的各个选项
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
