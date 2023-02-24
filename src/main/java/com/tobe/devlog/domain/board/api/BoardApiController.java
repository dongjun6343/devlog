package com.tobe.devlog.domain.board.api;


import com.tobe.devlog.domain.board.application.BoardService;
import com.tobe.devlog.domain.board.dto.BoardRequestDto;
import com.tobe.devlog.domain.board.dto.BoardResponseDto;
import com.tobe.devlog.domain.board.entitiy.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/board")
@RequiredArgsConstructor
public class BoardApiController {

    private final BoardService boardService;


    @GetMapping("/{id}")
    public ResponseEntity<BoardResponseDto> getBoard(@PathVariable Long id){
        return ResponseEntity.ok(boardService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<BoardResponseDto>> getBoardList(){
        return ResponseEntity.ok(boardService.findAll());
    }

    @PostMapping
    public ResponseEntity<BoardResponseDto> create(@RequestBody @Valid BoardRequestDto request){

        Board save = boardService.save(request.toEntity());
        return ResponseEntity.ok().body(new BoardResponseDto(save));
    }

    @PatchMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody @Valid BoardRequestDto request){
        boardService.update(id, request);
    }

}
