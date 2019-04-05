package com.mashuq.spring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class RestfulController {

    private String hostName;

    public RestfulController() {
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
        map.put("node", getNodeData());
        return map;
    }

    @RequestMapping("/data/")
    Map data() {
        Map map = new HashMap();
        map.put("response", "data from java spring");
        map.put("host", hostName);
        return map;
    }


    private static String getNodeData() {
        final String uri = "http://node:8080/data/";

        RestTemplate restTemplate = new RestTemplate();
        String result = null;
        try {
            result = restTemplate.getForObject(uri, String.class);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return result;
    }
}
