package com.catalogue;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobController {

	@RequestMapping("/rest/health")
	public String sayHello() {
		return "{'status':'OK'}";
	}
	
	@RequestMapping("/rest/server")
	public String identity() {
		return "{'source':'backend'}";
	}
}
