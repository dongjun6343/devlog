package com.tobe.devlog.domain.member.dto.response;


import lombok.*;


// 수정예정 , 테스트를 위해서 일단 작성
@Getter
@Setter
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDto {

    private String jwt;
    private String username;

}
