package com.example.foodordering.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foodordering.system.entity.Food;
import com.example.foodordering.system.repository.FoodRepository;

@Service
public class FoodService {
	
	@Autowired
	private FoodRepository repository;
	
	
	public Food saveFood(Food food) {
		return repository.save(food);
	}
	
	public List<Food> getfoods() {
		return repository.findAll();
	}
	
	public void deleteFood(Long id) {
		repository.deleteById(id);
	}
}