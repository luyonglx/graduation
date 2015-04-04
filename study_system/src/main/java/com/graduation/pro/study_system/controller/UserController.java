package com.graduation.pro.study_system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class UserController {
    @RequestMapping("index")
    public String index(){
        return "index";
    }
    
    @RequestMapping("say")
    public String say(String str)
    {
    	return str;
    }
    
     
}