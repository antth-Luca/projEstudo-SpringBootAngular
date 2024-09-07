package io.github.antth_Luca.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.github.antth_Luca.api.model.CidadeModel;
import io.github.antth_Luca.api.repository.CidadeRepository;

@RestController
@RequestMapping("/api/cidade")
public class CidadeController {
    @Autowired
    private CidadeRepository repository;

    @PostMapping
    private CidadeModel inserir(@RequestBody CidadeModel cidade) {
        return repository.save(cidade);
    }

    @GetMapping
    public List<CidadeModel> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public CidadeModel getById(@PathVariable Integer id) {
        return repository.findById(id).get();  // 'findById' retorna um object 'option' que não tem os dados, por isso use com 'get';
    }

    @PutMapping
    public CidadeModel update(@RequestBody CidadeModel cidade) {
        return repository.save(cidade);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(code=HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        CidadeModel obj = repository.findById(id).get();
        repository.delete(obj);
    }
}
