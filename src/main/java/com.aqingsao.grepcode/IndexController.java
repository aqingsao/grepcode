package com.aqingsao.grepcode;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

    @RequestMapping("/simple")
    public @ResponseBody String simple() {
        return "A simple response body";
    }
}
