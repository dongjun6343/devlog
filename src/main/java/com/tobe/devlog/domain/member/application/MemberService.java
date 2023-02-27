package com.tobe.devlog.domain.member.application;


import com.tobe.devlog.domain.member.dao.MembmerRepository;
import com.tobe.devlog.domain.member.dto.request.JoinRequestDto;
import com.tobe.devlog.domain.member.dto.request.LoginRequestDto;
import com.tobe.devlog.domain.member.dto.response.JoinResponseDto;
import com.tobe.devlog.domain.member.dto.response.LoginResponseDto;
import com.tobe.devlog.global.jwt.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemberService {
//    private final MembmerRepository membmerRepository;
//    private final PasswordEncoder encoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserDetailsService userDetailsService;


    @Transactional
    public JoinResponseDto join(JoinRequestDto request) {

        saveMember(request);
        authenticate(request.getUsername(), request.getPassword());

        return new JoinResponseDto(request.getUsername());
    }

    private void saveMember(JoinRequestDto request) {
        // 아이디 중복 확인

        // 패스워드 일치 확인
        checkPwd(request.getPassword(), request.getCheckPassword());

        // 회원 정보 생성

        //
    }

    public LoginResponseDto login(LoginRequestDto request) {
        authenticate(request.getUsername(), request.getPassword());

        final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);

        return new LoginResponseDto(token, request.getUsername());
    }

    private void authenticate(String id, String pwd) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(id, pwd));
    }

    private void checkPwd(String pwd, String checkPwd) {
        if (!pwd.equals(checkPwd)) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }
    }
}
