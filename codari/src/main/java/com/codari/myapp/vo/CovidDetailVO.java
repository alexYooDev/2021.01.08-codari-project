package com.codari.myapp.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CovidDetailVO implements Comparable<CovidDetailVO> {

	private String deathCnt;
	private String defCnt;
	private String gubun;
	private String localOccCnt;
	private String overFlowCnt;
	private String stdDay;

	@Override
	public int compareTo(CovidDetailVO cd) { 
		return gubun.compareTo(cd.gubun); 
	}
}
