var data={
	"key": "^RBC(\"DEP\")",
	"items": [{
		"key": 0,
		"value": 9,
		"items": [{
			"key": "Code",
			"items": [{
				"key": "01",
				"items": [{
					"key": 1,
					"value": ""
				}]
			}, {
				"key": "02",
				"items": [{
					"key": 2,
					"value": ""
				}]
			}, {
				"key": "03",
				"items": [{
					"key": 3,
					"value": ""
				}]
			}, {
				"key": "04",
				"items": [{
					"key": 4,
					"value": ""
				}]
			}, {
				"key": "05",
				"items": [{
					"key": 5,
					"value": ""
				}]
			}, {
				"key": "06",
				"items": [{
					"key": 6,
					"value": ""
				}]
			}, {
				"key": "07",
				"items": [{
					"key": 7,
					"value": ""
				}]
			}, {
				"key": "08",
				"items": [{
					"key": 8,
					"value": ""
				}]
			}, {
				"key": "09",
				"items": [{
					"key": 9,
					"value": ""
				}]
			}]
		}, {
			"key": "Desc",
			"items": [{
				"key": "临床科室",
				"items": [{
					"key": 2,
					"value": ""
				}]
			}, {
				"key": "体检中心",
				"items": [{
					"key": 8,
					"value": ""
				}]
			}, {
				"key": "其他科室",
				"items": [{
					"key": 9,
					"value": ""
				}]
			}, {
				"key": "医技科室",
				"items": [{
					"key": 4,
					"value": ""
				}]
			}, {
				"key": "护理单元",
				"items": [{
					"key": 3,
					"value": ""
				}]
			}, {
				"key": "药剂科室",
				"items": [{
					"key": 5,
					"value": ""
				}]
			}, {
				"key": "行政科室",
				"items": [{
					"key": 7,
					"value": ""
				}]
			}, {
				"key": "财务科室",
				"items": [{
					"key": 6,
					"value": ""
				}]
			}, {
				"key": "门急诊科室",
				"items": [{
					"key": 1,
					"value": ""
				}]
			}]
		}]
	}, {
		"key": 1,
		"value": "01^门急诊科室^64284^^"
	}, {
		"key": 2,
		"value": "02^临床科室^64284^^"
	}, {
		"key": 3,
		"value": "03^护理单元^64284^^"
	}, {
		"key": 4,
		"value": "04^医技科室^64284^^"
	}, {
		"key": 5,
		"value": "05^药剂科室^64284^^"
	}, {
		"key": 6,
		"value": "06^财务科室^64284^^"
	}, {
		"key": 7,
		"value": "07^行政科室^64284^^"
	}, {
		"key": 8,
		"value": "08^体检中心^64284^^"
	}, {
		"key": 9,
		"value": "09^其他科室^64284^^"
	}]
}



$(function(){
	$('#container').multivalue({
		data:data
	})
})
