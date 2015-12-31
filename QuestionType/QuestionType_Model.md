#试题类型英文名(中文名)

##实际样题

(试题item的实际信息，包括题干，各小题)

##JSON结构

	{	"id": 1,				
		"stem": "试题题干，为包括图片、音频以及视频的富文本内容",
		"length": "当type为阅读类型时。为文章字数",
		"showLength": true, //是否显示题干字数
		"options": [ 		//item选项数组，数组中的内容为item各选项
			"item选项1",			
			"item选项2"
		],
		"shuffle": "当itemoption存在时，指定是否可以乱序",
		"preShow": "是否提前显示小题",
		"questions": [			//试题item所包含的所有问题数组，数组中的每个元素为一个question,每个question为一个对象
			{
				"type": "question的类型",	// SingleAnswer(简答)、BlankFilling(填空）、SingleChoice(单选）、MultipleChoice(多选)、Record(录音）
				"pause": "如果为听力题，则为听力答题时长，如果为录音题，则为录音时长", //此处单位为秒
				"shuffle": true, //只有当type为多选或者单选时，该选项才有效			
				"stem": "question题干<img src='dafa.img' />",
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
