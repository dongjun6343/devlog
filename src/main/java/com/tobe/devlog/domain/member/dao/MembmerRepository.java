package com.tobe.devlog.domain.member.dao;


import com.tobe.devlog.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;



public interface MembmerRepository extends JpaRepository<Member, Long> {

    Member findByUsername(String username);

}
