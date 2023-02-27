package com.tobe.devlog.domain.member.api;

import com.tobe.devlog.domain.member.application.MemberService;
import com.tobe.devlog.domain.member.dto.request.JoinRequestDto;
import com.tobe.devlog.domain.member.dto.request.LoginRequestDto;
import com.tobe.devlog.domain.member.dto.response.JoinResponseDto;
import com.tobe.devlog.domain.member.dto.response.LoginResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;


    @PostMapping("/join")
    public ResponseEntity<JoinResponseDto> join(@Valid @RequestBody JoinRequestDto request) {

        return ResponseEntity.ok(memberService.join(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@Valid @RequestBody LoginRequestDto request) {

        return ResponseEntity.ok(memberService.login(request));
    }

}
