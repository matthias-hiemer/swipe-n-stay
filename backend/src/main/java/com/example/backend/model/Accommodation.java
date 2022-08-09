package com.example.backend.model;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class Accommodation {

    private String id;
    private String name;
    private String imageUrl;
    private BigDecimal pricePerNight;
    private BigDecimal priceTotal;
    private String detailUrl;
    private Float rating;
    private Integer ratingCount;
}
