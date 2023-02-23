package com.tobe.devlog.domain.board.api;


import com.tobe.devlog.domain.board.application.BoardService;
import com.tobe.devlog.domain.board.dto.BoardResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/board")
@RequiredArgsConstructor
public class BoardApiController {

    private final BoardService boardService;


    @GetMapping("/{id}")
    public ResponseEntity<BoardResponseDto> getBoardList(@PathVariable Long id){

        return ResponseEntity.ok(boardService.findById(id));
    }

}
