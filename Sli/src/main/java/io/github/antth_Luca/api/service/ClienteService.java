package io.github.antth_Luca.api.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;

import io.github.antth_Luca.api.model.Cliente;
import io.github.antth_Luca.api.responses.Response;
import jakarta.validation.Valid;

@Service
public interface ClienteService {
    ResponseEntity<Response<Cliente>> salvar(@Valid @RequestBody Cliente cliente, BindingResult result);
}
