package com.tobe.devlog.global.security;

import com.tobe.devlog.domain.member.dao.MembmerRepository;
import com.tobe.devlog.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;



@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {


    private final MembmerRepository membmerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = membmerRepository.findByUsername(username);

        if(member == null){
            throw new UsernameNotFoundException(String.format("'%s'는 존재하지 않는 회원입니다.", username));
        }

        return new UserDetailsImpl(member);
    }
}
