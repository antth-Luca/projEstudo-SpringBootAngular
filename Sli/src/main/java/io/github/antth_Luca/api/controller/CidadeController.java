package io.github.antth_Luca.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cidade")
public class CidadeController {
    @GetMapping
    public String getAll() {
        return "Lista de cidades";
    }

    @GetMapping("/{id}")
    public String getById(@PathVariable String id) {
        return "Cidade " + id;
    }
}
