package io.github.antth_Luca.api.service.impl;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

import io.github.antth_Luca.api.model.Cliente;
import io.github.antth_Luca.api.repository.ClienteRepository;
import io.github.antth_Luca.api.responses.Response;
import io.github.antth_Luca.api.service.ClienteService;

@Component
public class ClienteServiceImpl implements ClienteService {
    @Autowired
    private ClienteRepository repository;

    @Override
    public ResponseEntity<Response<Cliente>> salvar(@Valid Cliente cliente, BindingResult result) {
        Response<Cliente> response = new Response<Cliente>();
        response.setData(cliente);
        if (result.hasErrors()) {
            for (ObjectError erros: result.getAllErrors()) {
                response.getErrors().add(erros.getDefaultMessage());
            }

            return ResponseEntity.badRequest().body(response);
        }

        repository.save(cliente);
        return ResponseEntity.ok(response);
    }
}
