package com.tobe.devlog.domain.board.dao;


import com.tobe.devlog.domain.board.entitiy.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
