package com.codari.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codari.myapp.service.CovidHospService;

@Controller
public class CovidHospController {

	@Autowired
	CovidHospService covidHospService;

	@RequestMapping(value = "/covid/covidHospital.do")
	public String covidHospGet(Model model) {
		model.addAttribute("items", covidHospService.covidHospital());
		return "covid/covidHospital";
	}

	@RequestMapping(value = "/covid/covidSC.do")
	public String covidSCGet(Model model) {
		model.addAttribute("items", covidHospService.covidSC());
		return "covid/covidSC";
	}

	@RequestMapping(value = "/covid/covidTestSite.do")
	public String covidTSGet(Model model) {
		model.addAttribute("items", covidHospService.covidTestSite());
		return "covid/covidTestSite";
	}

	@RequestMapping(value = "/covid/covidHospitalHome.do")
	public String covidHospHomeGet(Model model) {
		return "covid/covidHospitalHome";
	}

}
