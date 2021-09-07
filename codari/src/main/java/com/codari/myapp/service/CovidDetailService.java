package com.codari.myapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.codari.myapp.covid.CovidDetailParser;
import com.codari.myapp.vo.CovidDetailVO;

@Service
public class CovidDetailService {

	public List<CovidDetailVO> covidDetail() {
		return new CovidDetailParser().getCovidDetail();
	}
}
