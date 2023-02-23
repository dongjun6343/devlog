package com.tobe.devlog.domain.board.application;

import com.tobe.devlog.domain.board.dao.BoardRepository;
import com.tobe.devlog.domain.board.dto.BoardResponseDto;
import com.tobe.devlog.domain.board.entitiy.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public BoardResponseDto findById(Long id){
        Board entity = boardRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 게시물이 없습니다. id + = " + id));

        return new BoardResponseDto(entity);
    }

    public List<BoardResponseDto> findAll(){
        List<Board> entity = boardRepository.findAll();

        return entity.stream().map(BoardResponseDto::new).collect(Collectors.toList());
    }
}
