package com.keenan.family.guitarintervalflashcard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontEndController {

	@GetMapping("/guitar")
	public String index(Model model) {
		return "guitar";
	}

}