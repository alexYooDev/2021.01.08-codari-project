package com.codari.myapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codari.myapp.covid.CovidHospParser;
import com.codari.myapp.covid.CovidSCParser;
import com.codari.myapp.covid.CovidTSParser;
import com.codari.myapp.dao.CovidHospDAO;
import com.codari.myapp.vo.CovidHospVO;

@Service
public class CovidHospService {

	@Autowired
	CovidHospDAO dao;

	public List<CovidHospVO> covidHospital() {
		return new CovidHospParser().getHospInfo();
	}

	public List<CovidHospVO> covidSC() {
		return new CovidSCParser().getSCInfo();
	}

	public List<CovidHospVO> covidTestSite() {
		return new CovidTSParser().getTSInfo();
	}
}
