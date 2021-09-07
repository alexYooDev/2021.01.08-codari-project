package com.codari.myapp.covid;

import java.text.SimpleDateFormat;

import java.util.Calendar;

import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.codari.myapp.vo.CovidInfoVO;

public class CovidTableParser {
	private static String getTagValue(String tag, Element eElement) {
		NodeList nlList = eElement.getElementsByTagName(tag).item(0).getChildNodes();
		Node nValue = (Node) nlList.item(0);
		if (nValue == null)
			return null;
		return nValue.getNodeValue();
	}

	public List<CovidInfoVO> getCovidInfo() {
		List<CovidInfoVO> ciList = new ArrayList<>();
		int page = 1; // 페이지 초기값
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String today = sdf.format(cal.getTime());
		cal.add(Calendar.DATE, -1);
		String yesterday = sdf.format(cal.getTime());

		try {
			while (true) {
				// parsing할 url 지정(API 키 포함해서)
				String url = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=euX6vFhPLUxGCkMSRoTlyG4Dwdy%2BP%2BHjEiRR5hCNLSd6L87ZLNyZb50xq8PXcYK3cOCC2r2SH4i7DFbRZTElAg%3D%3D&numOfRows=10&startCreateDt="
						+ yesterday + "&endCreateDt=" + today + "&pageNo=" + page;

				DocumentBuilderFactory dbFactoty = DocumentBuilderFactory.newInstance();
				DocumentBuilder dBuilder = dbFactoty.newDocumentBuilder();
				Document doc = dBuilder.parse(url);

				// root tag
				doc.getDocumentElement().normalize();
				System.out.println("Root element :" + doc.getDocumentElement().getNodeName());

				// 파싱할 tag
				NodeList nList = doc.getElementsByTagName("item");

				for (int temp = 0; temp < nList.getLength(); temp++) {
					Node nNode = nList.item(temp);
					if (nNode.getNodeType() == Node.ELEMENT_NODE) {

						Element eElement = (Element) nNode;
						CovidInfoVO ci = new CovidInfoVO();
						ci.setStateDt(getTagValue("stateDt", eElement));
						ci.setDecideCnt(getTagValue("decideCnt", eElement));
						ci.setDeathCnt(getTagValue("deathCnt", eElement));
						ci.setAccExamCnt(getTagValue("accExamCnt", eElement));
						ci.setAccExamCompCnt(getTagValue("accExamCompCnt", eElement));
						ci.setResutlNegCnt(getTagValue("resutlNegCnt", eElement));
						ci.setClearCnt(getTagValue("clearCnt", eElement));
						ciList.add(ci);
					} // for end
					ciList.sort(null);
					for (int i = 1; i < ciList.size(); i++) {
						int decDate = Integer.parseInt(ciList.get(i).getDecideCnt());
						int decDatePrior = Integer.parseInt(ciList.get(i - 1).getDecideCnt());
						ciList.get(i).setDailyDecideCnt((decDate - decDatePrior) + "");
						int deathCnt = Integer.parseInt(ciList.get(i).getDeathCnt());
						int deathCntPrior = Integer.parseInt(ciList.get(i - 1).getDeathCnt());
						ciList.get(i).setDailyDeathCnt((deathCnt - deathCntPrior) + "");
						int totalExamCnt = Integer.parseInt(ciList.get(i).getAccExamCnt());
						int totalExamCntPrior = Integer.parseInt(ciList.get(i - 1).getAccExamCnt());
						ciList.get(i).setDailyExCnt((totalExamCnt - totalExamCntPrior) + "");
						int totalExamCompCnt = Integer.parseInt(ciList.get(i).getAccExamCompCnt());
						int totalExamComptCntPrior = Integer.parseInt(ciList.get(i - 1).getAccExamCompCnt());
						ciList.get(i).setDailyExcCnt((totalExamCompCnt - totalExamComptCntPrior) + "");
						int negCnt = Integer.parseInt(ciList.get(i).getResutlNegCnt());
						int negCntPrior = Integer.parseInt(ciList.get(i - 1).getResutlNegCnt());
						ciList.get(i).setDailyRnCnt((negCnt - negCntPrior) + "");
						int clearCnt = Integer.parseInt(ciList.get(i).getClearCnt());
						int clearCntPrior = Integer.parseInt(ciList.get(i - 1).getClearCnt());
						ciList.get(i).setDailyClCnt((clearCnt - clearCntPrior) + "");
					}
				} // if end

				page += 1;
				System.out.println("page number : " + page);
				if (page > 1) {
					break;
				}
			} // while end

		} catch (Exception e) {
			e.printStackTrace();
		} // try~catch end
		return ciList;
	} // main end
} // class end
