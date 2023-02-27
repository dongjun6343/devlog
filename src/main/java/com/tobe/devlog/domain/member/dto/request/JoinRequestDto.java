package com.tobe.devlog.domain.member.dto.request;

import lombok.*;


// 수정예정 , 테스트를 위해서 일단 작성
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JoinRequestDto {
    private String username; //아이디

    private String password;

    private String checkPassword;

    private String email;

}
