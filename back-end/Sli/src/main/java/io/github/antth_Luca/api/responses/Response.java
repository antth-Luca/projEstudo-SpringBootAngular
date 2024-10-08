package io.github.antth_Luca.api.responses;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class Response<T> {
    private T data;
    private List<String> errors;

    public List<String> getErrors() {
        if (this.errors == null) {
            this.errors = new ArrayList<String>();
        }
        return errors;
    }
}
