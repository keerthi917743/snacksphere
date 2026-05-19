package com.example.foodordering.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodordering.system.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food,Long> {

}
