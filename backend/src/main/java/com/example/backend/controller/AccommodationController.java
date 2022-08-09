package com.example.backend.controller;

import com.example.backend.model.Accommodation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accommodation")
public class AccommodationController {

    @GetMapping
    public List<Accommodation> getAccommodations() {
        return List.of(
                Accommodation.builder()
                        .id("WEDWF-123123")
                        .name("Buxtehude Bude")
                        .rating(4.5f)
                        .ratingCount(145)
                        .detailUrl("https://www.booking.com/hotel/es/zenit-san-sebastian.html")
                        .imageUrl("https://cf.bstatic.com/xdata/images/hotel/max1280x900/36037056.jpg?k=40c10647a65227ecd465e5d7895e1457babd488bc2dba2bed09e9d7d766b8a43&o=")
                        .pricePerNight(BigDecimal.valueOf(125))
                        .priceTotal(BigDecimal.valueOf(250))
                        .build(),
                Accommodation.builder()
                        .id("GDSFEGT-12234")
                        .name("Sospel Hostel")
                        .rating(4.9f)
                        .ratingCount(65)
                        .detailUrl("https://www.booking.com/hotel/es/tryporly.html")
                        .imageUrl("https://cf.bstatic.com/xdata/images/hotel/square60/240920346.jpg?k=dd8701162b8003264f3b0d0f8d8040cb772af1d9e535590ea4110782d9c5dd7d&o=")
                        .pricePerNight(BigDecimal.valueOf(55))
                        .priceTotal(BigDecimal.valueOf(110))
                        .build()
        );
    }
}
