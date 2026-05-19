package com.example.foodordering.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodordering.system.entity.Food;
import com.example.foodordering.system.service.FoodService;

@RestController
@RequestMapping("/foods")
@CrossOrigin("*")
public class FoodController {
	
	@Autowired
	private FoodService service;
	
	@PostMapping
	public Food addfood(@RequestBody Food food) {
        return service.saveFood(food);
	}
	
	@GetMapping
	public List <Food> getfood(){
		return service.getfoods();
	}
	
	@DeleteMapping("/{id}")
	public void deleteFood(@PathVariable Long id) {
		service.deleteFood(id);
	}

}
