package com.mashuq.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class RestfulController {

    private String hostName;

    public RestfulController(){
        try {
            InetAddress ip = InetAddress.getLocalHost();
            hostName = ip.getHostName();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

    }

    @RequestMapping("/")
    Map home() {
        Map map = new HashMap();
        map.put("app", "java spring");
        map.put("host", hostName);
        return map;
    }
}
