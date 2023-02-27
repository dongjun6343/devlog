package com.tobe.devlog.domain.member.dto.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

// 수정예정 , 테스트를 위해서 일단 작성
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginRequestDto {

    @NotBlank(message = "아이디를 입력하세요.")
    private String username; // 아이디

    @NotBlank(message = "비밀번호를 입력하세요.")
    private String password;
}
