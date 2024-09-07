package io.github.antth_Luca.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.github.antth_Luca.api.model.Cliente;
import io.github.antth_Luca.api.responses.Response;
import io.github.antth_Luca.api.service.impl.ClienteServiceImpl;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/cliente")
public class ClienteController {
    @Autowired
    private ClienteServiceImpl service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Response<Cliente>> inserir(@Valid @RequestBody Cliente cliente, BindingResult result) {
        return service.salvar(cliente, result);
    }
}
